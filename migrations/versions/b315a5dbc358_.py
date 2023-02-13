"""empty message

Revision ID: b315a5dbc358
Revises: 180cec22783f
Create Date: 2023-02-13 03:46:26.616180

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'b315a5dbc358'
down_revision = '180cec22783f'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('user', schema=None) as batch_op:
        batch_op.drop_constraint('user_first_name_key', type_='unique')
        batch_op.drop_constraint('user_last_name_key', type_='unique')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('user', schema=None) as batch_op:
        batch_op.create_unique_constraint('user_last_name_key', ['last_name'])
        batch_op.create_unique_constraint('user_first_name_key', ['first_name'])

    # ### end Alembic commands ###
