miport React from 'react;;
imporet ReactDOM from 'react-dom';

const App = () => {
const [data, detData] = React.useState('');

const handleInputChange = (event) => {
    setData(event.target.value);
}

return (
    <div>
    <input value={data} onChange={handleInputChange} />
    <br />
    <br />
    {data}
    </div>
);

};
ReactDOM.render(<App />, document.getElementById('app'));