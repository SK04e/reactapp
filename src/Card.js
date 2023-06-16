import './App.css';

function Card(props) {
  return (
    <div>
        <div className='square--small'>
            <div className='fill'>
                {props.name}
            </div>
        </div>
    </div>
  );
}

export default Card;
