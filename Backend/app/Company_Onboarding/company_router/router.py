from fastapi import APIRouter,Depends ,Form , File,UploadFile
from sqlalchemy.orm import Session
from pydantic import EmailStr
from app.db.base import get_db
from ...Authentication_Flow.authentication_model.member_model import Member
from ..company_schema.schema import CompanyOnboarding,AdminActivation
from..company_model.company_model import Company,SubscriptionEnum
from ...Authentication_Flow.authentication_service.auth_service import login_with_otp, request_otp
from ...dependencies.jwt.handler import get_current_user
from ..company_service.service import onboarding,activate_company_admin

router=APIRouter(prefix="/company",tags=["Company"])

@router.post("/onboard",response_model=CompanyOnboarding)
def company_onboarding(name:str= Form(...),
                       domain:str=Form(...),
                    #    logo:UploadFile=Form(...),
                       subscription:SubscriptionEnum=Form(...),admin_name:str=Form(...),admin_last_name:str=Form(...),admin_email:EmailStr=Form(...),db:Session=Depends(get_db),user:Member=Depends(get_current_user)):
    return onboarding(db=db,name=name,domain=domain,subscription=subscription,admin_name=admin_name,admin_last_name=admin_last_name,admin_email=admin_email,user=user)
    
@router.post("/activation-admin/")
def active_admin(email:EmailStr=Form(...),otp:str=Form(...),password:str=Form(...),db:Session=Depends(get_db)):
    return activate_company_admin(db,email,otp,password)
