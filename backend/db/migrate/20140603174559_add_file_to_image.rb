class AddFileToImage < ActiveRecord::Migration
  def self.up
    add_attachment :images, :thefile
  end
end
