from fastapi import Depends,HTTPException,status
from ..jwt.handler import get_current_user
 

def role_necessary(*data:str):
    def role_checker(user:dict =Depends(get_current_user)):
        user_role=user.get("role")
        if user_role in data:
            return user
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN,detail="Not Authorized")
    return role_checker


