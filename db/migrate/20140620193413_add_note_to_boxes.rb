class AddNoteToBoxes < ActiveRecord::Migration
  def change
  	add_column :boxes, :note, :string
  end
end
