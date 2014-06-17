class CreateQuestions < ActiveRecord::Migration
  def change
    create_table :questions do |t|
      t.integer :wordquiz_id, null: false
      t.boolean :correct, default: false

      t.timestamps
    end
    add_index :questions, :wordquiz_id
  end
end
