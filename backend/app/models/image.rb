class Image < ActiveRecord::Base
  has_attached_file :thefile, :styles => { :medium => "300x300>", :thumb => "100x100>" }, :default_url => "/images/:style/missing.png"
  validates_attachment_content_type :thefile, :content_type => /\Aimage\/.*\Z/
  # link it to the box model for coordinate data
  has_many :boxes, dependent: :destroy
end
