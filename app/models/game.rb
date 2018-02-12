class Game < ApplicationRecord
  # Saves the board in the database as an object, and allows you to retrieve as the same object
  serialize :board

  include GamesHelper
  include ActiveModel::Validations

  attr_accessor :board

  validates :board, :presence => true

  # Initializes the object with a board, made up of a two dimensional array of
  # nils. Eg
  #   board = [ [nil, nil, nil],
  #             [nil, nil, nil],
  #             [nil, nil, nil]  ]
  # This is called when you use `Game.new` or `Game.create!`.
  def initialize
    super
    self.board = Array.new(3).map{[nil, nil, nil]}
  end

  def update_board(player, row, column)
    # TODO
  end

  # Returns the current_player
  # @return [String] 'x' or 'o'
  def current_player
    # TODO
  end

  # Plays the game
  #
  # @returns winner
  # updates the board
  # call #WINNER AFTER each move, not before
  def play(row, column)
    # TODO
  end

  # @return [Boolean] returns true if there is a winner, false otherwise
  def winner
    # TODO
  end


  # The below methods can only be accessed by methods in this class
  private

  # Establishes winner in row
  def check_rows_for_winner
    # TODO
  end

  # Establishes winner in columns
  def check_columns_for_winner
    # TODO
  end

  # Establishes winner diagonally
  def check_diagonals_for_winner
    # TODO
  end
end
