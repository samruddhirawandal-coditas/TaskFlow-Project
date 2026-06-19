from fastapi import APIRouter, Depends, Query
from sqlalchemy.orm import Session

from ...db.base import get_db
from ...dependencies.RBAC.role_checker import role_necessary

from ..project_schema.schema import ProjectCreate,ProjectInviteAccept,ProjectInviteCreate,ProjectUpdate
from ..project_service.service import accept_project_invite_service,create_project_service,delete_project_service,edit_project_service,invite_member_service,list_projects


router = APIRouter(prefix="/projects", tags=["Projects"])


@router.post("/create")
def create_project(data: ProjectCreate,db: Session = Depends(get_db),current_user: dict = Depends("ADMIN")):
    return create_project_service(db=db,current_user=current_user,name=data.name,description=data.description,company_id=data.company_id,)


@router.get("/get")
def get_projects(company_id: int | None = Query(None),search: str | None = Query(None),sort_by: str ="name",sort_order: str = Query("desc"),db: Session = Depends(get_db)):
    return list_projects(db=db,company_id=company_id,search=search,sort_by=sort_by,sort_order=sort_order )


@router.patch("/{project_id}")
def update_project(project_id: int,data: ProjectUpdate,current_user: dict = Depends("ADMIN"),db: Session = Depends(get_db),
):
    return edit_project_service(db=db,current_user=current_user,project_id=project_id,name=data.name,description=data.description,)


@router.delete("/{project_id}")
def remove_project(project_id: int,current_user: dict = Depends("ADMIN"),db: Session = Depends(get_db),):
    return delete_project_service(db=db, current_user=current_user, project_id=project_id)

# invite member to project 
@router.post("/{project_id}/invite")
def invite_member(project_id: int,data: ProjectInviteCreate,current_user: dict = Depends("ADMIN"),db: Session = Depends(get_db),):
    return invite_member_service(db=db,current_user=current_user,project_id=project_id,email=data.email, role_name=data.role_name,)

# inivtation accepted
@router.post("/invite/accept")
def accept_invite(data: ProjectInviteAccept, db: Session = Depends(get_db)):
    return accept_project_invite_service(db=db, email=data.email, token=data.token)
 