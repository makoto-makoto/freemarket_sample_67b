class CreateCards < ActiveRecord::Migration[5.2]
  def change
    create_table :cards do |t|
      t.references :user, foreign_key: true
      t.string :customer_id
      t.string :card_id
    end
  end
end
