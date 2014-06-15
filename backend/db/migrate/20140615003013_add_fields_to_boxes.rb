class AddFieldsToBoxes < ActiveRecord::Migration
  def change
  	 add_column :boxes, :x_start, :integer
  	 add_column :boxes, :x_end, :integer
  	 add_column :boxes, :y_start, :integer
  	 add_column :boxes, :y_end, :integer
  end
end
