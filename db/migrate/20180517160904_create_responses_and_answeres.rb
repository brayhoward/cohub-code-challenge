class CreateResponsesAndAnsweres < ActiveRecord::Migration[5.1]
  def change
    create_table :responses do |t|
      t.text :responder

      t.timestamps
    end

    create_table :answers do |t|
      t.text :text
      t.text :bool
      t.text :selections
      t.belongs_to :response
      t.references :question

      t.timestamps
    end
  end
end
