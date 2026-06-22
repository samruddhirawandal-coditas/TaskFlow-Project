from fastapi import HTTPException ,status ,Depends 
from fastapi.security import OAuth2PasswordBearer
from .bearer import decode_access_token


oauth2schemes=OAuth2PasswordBearer(tokenUrl="/auth/login")

def get_current_user(token:str=Depends(oauth2schemes)):
    try:
        return decode_access_token(token)
    except HTTPException as exc:
        
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED,
                                         detail="user is unauthorized",
                                         headers={"WWW-Authenticate":"Bearer"},
                                         ) from exc
   








