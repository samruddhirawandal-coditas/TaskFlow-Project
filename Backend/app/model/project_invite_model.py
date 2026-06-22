from enum import Enum
from sqlalchemy import Column, Enum as SqlEnum, ForeignKey, Integer, String
from sqlalchemy.orm import relationship
from ..db.base import Base


class InviteStatus(str, Enum):
    PENDING = "pending"
    ACCEPTED = "accepted"


class ProjectInvite(Base):
    __tablename__ = "project_invites"

    id = Column(Integer, primary_key=True)
    project_id = Column(Integer, ForeignKey("projects.id"), nullable=False)
    email = Column(String, nullable=False)
    role_id = Column(Integer, ForeignKey("roles.id"), nullable=False)
    invited_by = Column(Integer, ForeignKey("members.id"), nullable=False)
    token = Column(String, unique=True, nullable=False)
    status = Column(SqlEnum(InviteStatus), nullable=False, default=InviteStatus.PENDING)

    project = relationship("Project", back_populates="invites")
    role = relationship("Role")