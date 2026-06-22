from sqlalchemy import Column, ForeignKey, Integer, String
from sqlalchemy.orm import relationship

from ..db.base import Base


class TaskAttachment(Base):
    __tablename__ = "task_attachments"

    id = Column(Integer, primary_key=True)
    task_id = Column(Integer, ForeignKey("tasks.id"), nullable=False)
    file_name = Column(String, nullable=False)
    content_type = Column(String, nullable=False)
    object_key = Column(String, nullable=False)
    file_url = Column(String, nullable=True)

    task = relationship("Task", back_populates="attachments")