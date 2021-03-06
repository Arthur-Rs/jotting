import { Model } from '@nozbe/watermelondb'
import { field, date, children } from '@nozbe/watermelondb/decorators'
import { Associations } from '@nozbe/watermelondb/Model'
import TransactionGoalModel from './transaction-goal.model'

class GoalModel extends Model {
  static table = 'goals'

  static associations = {
    transactions: { type: 'has_many', foreignKey: 'goal_id' },
  } as Associations

  @field('title')
  title: string

  @field('description')
  description?: string

  @field('total')
  total: number

  @field('total')
  goal: number

  @date('date')
  date?: Date

  @date('created_at')
  created_at: Date

  @date('date')
  updated_at: Date

  @children('transactions_goal')
  transactions: TransactionGoalModel[]
}

export default GoalModel
