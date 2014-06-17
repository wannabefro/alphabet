class CreateWordquizzes < ActiveRecord::Migration
  def change
    create_table :wordquizzes do |t|
      t.datetime :started_at, null: false, default: Time.now
      t.datetime :finished_at

      t.timestamps
    end
  end
end
