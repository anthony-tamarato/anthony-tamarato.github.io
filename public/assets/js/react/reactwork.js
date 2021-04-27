'use strict';


class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {

    return (
     <div class="col-4 col-6-medium col-12-small">
        <a href="#" class="image fit"><img src="images/pic01.jpg" alt=""></a>
    </div>
    );
  }
}

const domContainer = document.querySelector('#react-work');
ReactDOM.render(e(LikeButton), domContainer);
/*

<div class="row">
    <div class="col-4 col-6-medium col-12-small">
        <a href="#" class="image fit"><img src="images/pic01.jpg" alt=""></a>
    </div>
    <div class="col-4 col-6-medium col-12-small">
        <a href="#" class="image fit"><img src="images/pic02.jpg" alt=""></a>
    </div>
    <div class="col-4 col-6-medium col-12-small">
        <a href="#" class="image fit"><img src="images/pic03.jpg" alt=""></a>
    </div>
    <div class="col-4 col-6-medium col-12-small">
        <a href="#" class="image fit"><img src="images/pic04.jpg" alt=""></a>
    </div>
    <div class="col-4 col-6-medium col-12-small">
        <a href="#" class="image fit"><img src="images/pic05.jpg" alt=""></a>
    </div>
    <div class="col-4 col-6-medium col-12-small">
        <a href="#" class="image fit"><img src="images/pic06.jpg" alt=""></a>
    </div>
    <div class="col-4 col-6-medium col-12-small">
        <a href="#" class="image fit"><img src="images/pic07.jpg" alt=""></a>
    </div>
    <div class="col-4 col-6-medium col-12-small">
        <a href="#" class="image fit"><img src="images/pic08.jpg" alt=""></a>
    </div>
    <div class="col-4 col-6-medium col-12-small">
        <a href="#" class="image fit"><img src="images/pic09.jpg" alt=""></a>
    </div>
    <div class="col-4 col-6-medium col-12-small">
        <a href="#" class="image fit"><img src="images/pic10.jpg" alt=""></a>
    </div>
    <div class="col-4 col-6-medium col-12-small">
        <a href="#" class="image fit"><img src="images/pic11.jpg" alt=""></a>
    </div>
    <div class="col-4 col-6-medium col-12-small">
        <a href="#" class="image fit"><img src="images/pic12.jpg" alt=""></a>
    </div>
</div>
*/