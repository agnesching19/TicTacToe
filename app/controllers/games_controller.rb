class GamesController < ApplicationController
  def start_game
    @game = Game.new
  end
end
