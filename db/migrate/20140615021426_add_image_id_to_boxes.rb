class AddImageIdToBoxes < ActiveRecord::Migration
  def change
  	  	add_reference :boxes, :image, index: true
  end
end
