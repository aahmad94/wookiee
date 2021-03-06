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

ActiveRecord::Schema.define(version: 20180425004254) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "channel_subscriptions", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "channel_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean "admin", default: false
    t.integer "last_read_message_id", default: 0
    t.index ["channel_id"], name: "index_channel_subscriptions_on_channel_id"
    t.index ["user_id", "channel_id"], name: "index_channel_subscriptions_on_user_id_and_channel_id", unique: true
    t.index ["user_id"], name: "index_channel_subscriptions_on_user_id"
  end

  create_table "channels", force: :cascade do |t|
    t.string "channel_name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["channel_name"], name: "index_channels_on_channel_name", unique: true
  end

  create_table "directmessages", force: :cascade do |t|
    t.string "directmessage_name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "dm_subscriptions", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "directmessage_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "last_read_message_id", default: 0
    t.index ["directmessage_id"], name: "index_dm_subscriptions_on_directmessage_id"
    t.index ["user_id", "directmessage_id"], name: "index_dm_subscriptions_on_user_id_and_directmessage_id", unique: true
    t.index ["user_id"], name: "index_dm_subscriptions_on_user_id"
  end

  create_table "messages", force: :cascade do |t|
    t.integer "user_id", null: false
    t.string "body", null: false
    t.string "interface_type"
    t.bigint "interface_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["interface_type", "interface_id"], name: "index_messages_on_interface_type_and_interface_id"
    t.index ["user_id"], name: "index_messages_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", null: false
    t.string "displayname", null: false
    t.string "img_url"
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["displayname"], name: "index_users_on_displayname", unique: true
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
  end

end
