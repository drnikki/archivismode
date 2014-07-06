class Box < ActiveRecord::Base
	# box ain't shit without the image
	belongs_to :image
	#attr_accessible :image_id, :x_start, :x_end, :y_start, :y_end
	# adding search

	def self.search(search) 
		search_condition = Box.find_by note: search
	end


end
