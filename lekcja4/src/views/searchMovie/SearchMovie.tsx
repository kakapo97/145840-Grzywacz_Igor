import React from 'react';
import NavPanel from '../../components/navPanel/NavPanel'
import movieService, { IMoviesProps } from '../../services/movies.service';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
  table: {
    minWidth: '650px',
  }
});


const SearchMovie = () => {
  const classes = useStyles();
  const [movies, setMovies] = React.useState<IMoviesProps | null>(null);
  const [movieToSearch, setMovieToSearch] = React.useState('');

  React.useEffect(() => {
    movieService.searchByName(movieToSearch).then(resp => {
      if (resp) {
        setMovies(resp);
      }
    });

    movieService.searchById('tt0848228');
  }, [movieToSearch]);


  return (
    <div>
      <NavPanel/>
      <input
        placeholder="Enter movie name"
        onChange={event => setMovieToSearch(event.target.value)}
      />
      {!!movies?.movies.length &&
      movies?.movies.map(movie => (
        <div key={movie.id} className="card">
          <div className="carditemtext">{movie.title}<br />{movie.type}<br />{movie.year}</div>

          <img src={movie.poster} width="300" alt={movie.title}/>

        </div>
      ))
      }
    </div>
  );
};

export default SearchMovie;
