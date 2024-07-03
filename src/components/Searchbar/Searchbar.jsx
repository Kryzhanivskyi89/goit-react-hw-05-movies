import PropTypes from 'prop-types';
import style from './styles.module.css'


const Searchbar = ({ setSearchParams, searchParams }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const search = e.target.elements.search.value;
        setSearchParams({ query: search });
    };

    const inputValue = searchParams.get('query') ?? '';

    return (
        <div className={style.searchbar}>            
            <form className={style.SearchForm} onSubmit={handleSubmit}>
                <button type="submit" className={style.SearchformButton}>
                    <span className={style.searchform__button__label}>Search</span>
                </button>
                <input
                    className={style.searchform__input}
                    name="search"
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search movies"                    
                    defaultValue={inputValue}
                />
            </form> 
        </div>
    )
}

export default Searchbar;
Searchbar.propTypes = {
  setSearchParams: PropTypes.func,
  searchParams: PropTypes.object,
};