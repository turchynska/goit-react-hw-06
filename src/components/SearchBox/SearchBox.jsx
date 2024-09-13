import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';
import css from './SearchBox.module.css';

const SearchBox = () => {
    const filterValue = useSelector(state => state.filters.name); 
    const dispatch = useDispatch();

    const selectNameFilter = (evt) => {
        const value = evt.target.value.trim();
        dispatch(changeFilter(value));
    };

    return (
        <div className={css.box}>
            <p className={css.text}>Find contact by name</p>
            <input
                className={css.input}
                type='text'
                value={filterValue}
                onChange={selectNameFilter}
            />
        </div>
    );
}

export default SearchBox;