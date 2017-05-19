class Api::HeroesController < ApplicationController
  def index
    mock_heroes
    respond_to do |format|
      format.json {render json: @heroes}
    end
  end

  private
  def mock_heroes
    @heroes = [
      {id: 11, name: 'abc'},
      {id: 12, name: 'asdf'},
      {id: 13, name: 'asdfasdf'},
      {id: 14, name: 'ocizc'},
      {id: 15, name: 'asdf'}
    ]
  end
end
