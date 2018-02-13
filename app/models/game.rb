class Game < ApplicationRecord
  # Saves the board in the database as an object, and allows you to retrieve as the same object
  serialize :board

  include GamesHelper
  include ActiveModel::Validations

  attr_accessor :board

  validates :board, :presence => true

  def initialize
    super
    self.board = ["0", "1", "2", "3", "4", "5", "6", "7", "8"]
    @com = "X" # the computer's marker
    @hum = "O" # the user's marker
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
