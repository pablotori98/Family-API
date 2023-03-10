"""empty message

Revision ID: 180cec22783f
Revises: 45a7cd9e938d
Create Date: 2023-01-20 20:05:36.609058

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '180cec22783f'
down_revision = '45a7cd9e938d'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint('family_members_age_key', 'family_members', type_='unique')
    op.drop_constraint('family_members_gender_key', 'family_members', type_='unique')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_unique_constraint('family_members_gender_key', 'family_members', ['gender'])
    op.create_unique_constraint('family_members_age_key', 'family_members', ['age'])
    # ### end Alembic commands ###
