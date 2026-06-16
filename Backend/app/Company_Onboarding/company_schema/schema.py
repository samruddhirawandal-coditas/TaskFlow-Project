from pydantic import BaseModel,EmailStr,Field
from ..company_model.company_model import SubscriptionEnum
class CompanyOnboarding(BaseModel):
    name: str = Field(..., pattern=r"^(?i)[A-Z]+$")
    domain:str=Field(...,pattern=r"^[a-zA-Z0-9-]+\.com$")
    admin_name:str = Field(..., pattern=r"^(?i)[A-Z]+$")
    admin_last_name:str = Field(..., pattern=r"^(?i)[A-Z]+$")
    admin_email:EmailStr
    subscription:SubscriptionEnum

class AdminActivation(BaseModel):
    email:EmailStr
    otp:str
    password:str

class Presigned(BaseModel):
    url:str
    fields:str
    file_name:str