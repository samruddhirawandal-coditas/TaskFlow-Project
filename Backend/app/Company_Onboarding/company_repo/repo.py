from sqlalchemy.orm import Session

from ..company_model.company_model import Company,SubscriptionEnum
from ...Authentication_Flow.authentication_model.member_model import Member 
from ...Authentication_Flow.authentication_model.member_model import MemberRoleMapping
from ...Authentication_Flow.authentication_model.role_model import Role


def get_company_by_name(db: Session, name: str):
    return db.query(Company).filter(Company.name == name).first()

def get_member_by_email(db: Session, email: str):
    return db.query(Member).filter(Member.email == email).first()

def get_company_by_domain(db:Session,domain:str):
    return db.query(Company).filter(Company.domain==domain).first()

def get_role_by_name(db: Session, name: str):
    return db.query(Role).filter(Role.name == name).first()


def create_company(db: Session, name: str, domain:str, subscription:SubscriptionEnum):  #logo: str
    company = Company(
        name=name,
        # logo=logo,
        domain=domain,
        subcription=subscription,
    )
    db.add(company)
    db.flush()
    return company


def create_company_admin(db: Session, first_name: str, email: str, company_id: int):
    member = Member(
        first_name=first_name,
        email=email,
        status="PENDING",
        password=None,
        company_id=company_id,
    )

    db.add(member)
    # db.commit()
    # db.refresh(member)
    db.flush()
    return member


def assign_role_to_member(db: Session, member_id: int, role_id: int):
    mapping = MemberRoleMapping(member_id=member_id, role_id=role_id)
    db.add(mapping)
    db.flush()
    return mapping
