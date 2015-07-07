class Group < ActiveRecord::Migration
  def change
    create_table :group do |t|
      t.string :name
      t.text :description
    end
  end
end
