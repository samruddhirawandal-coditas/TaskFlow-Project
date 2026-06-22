from sqlalchemy import Column, String,Integer,Enum as SqlEnum ,ForeignKey ,TIMESTAMP ,Boolean
from ..db.base import Base
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
from enum import Enum

class Project(Base):
    __tablename__="projects"
    id=Column(Integer,primary_key=True,nullable=False)
    name=Column(String,unique=True,nullable=False)
    description=Column(String,nullable=False)
    created_at=Column(TIMESTAMP(timezone=True),nullable=False,server_default=func.now())
    is_archived=Column(Boolean,nullable=False,default=False,server_default="false")
    is_deleted=Column(Boolean,nullable=False,default=False,server_default="false")

    #relationship with company
    company_id=Column(Integer,ForeignKey("companys.id"))
    company=relationship("Company",back_populates="projects")

    #relationship with buckets
    bucket=relationship("Bucket",back_populates="project")

    #realtionship with task
    tasks=relationship("Task",back_populates="project")

    #relationship with member 
    member_role_mappings=relationship("MemberProjectRoleMapping",back_populates="project")

    #relationship with invitws 
    invites=relationship("ProjectInvite",back_populates="project")
