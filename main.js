class Media {
    constructor(title){
      this._title = title;
      this._isCheckedOut = false;
      this._ratings = [];
    }
  
    get title() {
      return this.title
      }
  
    get isCheckedOut(){
      return this._isCheckedOut;
    }
  
    set isCheckedOut(value){
       this._isCheckedOut = value;
    }
  
    get ratings(){
      return this._ratings;
    }
  
  toggleCheckOutStatus(){
    return this._isCheckedOut = !this._isCheckedOut
  }
  
  getAverageRating(){
    let ratingSum = this.ratings.reduce((accumulator, rating) => accumulator + rating)
      return ratingSum/ this.ratings.length;
  }
  
  addRating(value){
  return this.ratings.push(value);
  }
  
  }
  
  class Book extends Media{
    constructor(author, title, pages){
      super(title);
      this._author = author;
      this._pages = pages;
      }
  
    get author(){
      return this._author;
    }
  
    get pages(){
      return this._pages;
    }
  }
  
  class Movie extends Media{
    constructor(director, title, runTime){
      super(title);
      this._director = director;
      this._runTime = runTime;
    }
  
    get director(){
      return this._director;
    }
  
    get runTime(){
      return this._runTime;
    }
  }
  
  class CD extends Media{
    constructor(artist,title,songs){
      super(title);
      this._artist = artist;
      this._songs = [];
    }
  
    get artist(){
      return this.artist;
    }
  
    get songs(){
      return this.songs;
    }
  
  }
  let historyOfEverything = new Book('Bill Bryson','A Short History of Nearly Everything',544);
  
  console.log(historyOfEverything.toggleCheckOutStatus())
  historyOfEverything.addRating(4)
  historyOfEverything.addRating(5)
  historyOfEverything.addRating(5)
  console.log(historyOfEverything.getAverageRating())
  
  let speed = new Movie('Jan de Bont','Speed',116);
  
  console.log(speed.director)
  console.log(speed.toggleCheckOutStatus())
  speed.addRating(1)
  speed.addRating(1)
  speed.addRating(5)
  console.log(speed.getAverageRating())
  
  let tormentas = new CD('Tormenta','Sad, sad, sad',['sadness', 'im mad at you']);
  
  console.log(tormentas.toggleCheckOutStatus())
  console.log(tormentas)
  tormentas.addRating(5)
  tormentas.addRating(1)
  tormentas.addRating(5)
  console.log(tormentas.getAverageRating())