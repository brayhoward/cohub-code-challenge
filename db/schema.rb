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

ActiveRecord::Schema.define(version: 20180517160904) do

  create_table "answers", force: :cascade do |t|
    t.text "text"
    t.text "bool"
    t.text "selections"
    t.integer "response_id"
    t.integer "question_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["question_id"], name: "index_answers_on_question_id"
    t.index ["response_id"], name: "index_answers_on_response_id"
  end

  create_table "questions", force: :cascade do |t|
    t.integer "position", null: false
    t.text "label", null: false
    t.string "field_type", default: "string", null: false
    t.text "options"
    t.boolean "multiselect", default: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "responses", force: :cascade do |t|
    t.text "responder"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
