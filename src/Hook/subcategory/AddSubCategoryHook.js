import { useDispatch, useSelector } from 'react-redux';
import {getAllCategories} from '../../redux/actions/categoryAction';
import notify from '../../Hook/useNotification';
import { addNewSubcategory } from '../../redux/actions/subcategoryAction';
import { useEffect, useState } from 'react';

const AddSubCategoryHook = () => {
    const dispatch = useDispatch();
    
    useEffect( _ => {
        if(navigator.onLine){
            notify("ًًWeak internet connection", 'warn');
            return;
        }
        dispatch(getAllCategories());
    },[dispatch])

    const [name, setName] = useState('');
    const [catId, setCatId] = useState('0');
    const [loading, setLoading] = useState(true);

    const { categories } = useSelector( state => state.allCategories);
    const { subcategories } = useSelector( state => state.allSubcategories);

    const handleOnChange = e => {
        setCatId(e.target.value);
    }

    const onChangeName = e => {
        e.persist();
        setName(e.target.value);
    }

    const handleSubmit = async e => {
        e.preventDefault();
        if(navigator.onLine){
            notify("ًًWeak internet connection", 'warn');
            return;
        }
        if(catId === '0'){
            notify("اختر تصنيف رئيسى", 'warn');
            return;
        }
        if(name === ''){
            notify("اختر تصنيف فرعى", 'warn');
            return;
        }
        setLoading(true);
        await dispatch(addNewSubcategory({name: name, category: catId}));
        setLoading(false);
    }

    useEffect( _ => {
        if(!loading){
            setName('');
            setCatId('0');
        }
        if(subcategories.status === 201){
            notify("تمت الااضافة بنجاح", 'success');
        } else {
            notify("Error", 'error');
        }
    },[loading, subcategories.status])

    return {name, catId, loading, categories, subcategories, handleOnChange, onChangeName, handleSubmit};
}

export default AddSubCategoryHook