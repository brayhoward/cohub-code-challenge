class CreateQuestions < ActiveRecord::Migration[5.1]
  def change
    create_table :questions do |t|
      t.integer :position, null: false
      t.text :label, null: false
      t.string :field_type, null: false, default: 'string'
      t.text :options
      t.boolean :multiselect, default: false

      t.timestamps
    end
  end
end
