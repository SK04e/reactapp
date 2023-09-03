import './App.css';

function Card(props) {
  return (
    <div>
      <a href={props.link}>
        <div className='square--small'>
            <div className='fill'>
                <div className='product--name'>
                    {props.name}
                </div>
            </div>
        </div>
        </a>
    </div>
  );
}

export default Card;