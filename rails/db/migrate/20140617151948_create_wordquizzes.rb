class CreateWordquizzes < ActiveRecord::Migration
  def change
    create_table :wordquizzes do |t|
      t.datetime :finished_at

      t.timestamps
    end
  end
end
