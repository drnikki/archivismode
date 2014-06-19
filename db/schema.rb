# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20140615015735) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "boxes", force: true do |t|
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "x_start"
    t.integer  "x_end"
    t.integer  "y_start"
    t.integer  "y_end"
    t.integer  "image_id"
  end

  add_index "boxes", ["image_id"], name: "index_boxes_on_image_id", using: :btree

  create_table "images", force: true do |t|
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "thefile_file_name"
    t.string   "thefile_content_type"
    t.integer  "thefile_file_size"
    t.datetime "thefile_updated_at"
  end

end
