import './App.css';

function Card(props) {
  return (
    <div>
        <div className='square--small'>
            <div className='fill'>
                <div className='product--name'>
                    {props.name}
                </div>
            </div>
        </div>
    </div>
  );
}

export default Card;
