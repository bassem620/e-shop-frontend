import { useEffect, useState } from 'react'

import avatar from '../../images/avatar.png'
import notify from '../useNotification';

import { useDispatch, useSelector } from 'react-redux'
import { addNewBrand } from '../../redux/actions/brandAction'

const AddCategoryHook = () => {
    const dispatch = useDispatch();
    const res = useSelector( state => state.allBrands.brands);

    const [img, setImg] = useState(avatar);
    const [name, setName] = useState("");
    const [selectedFile, setSelectedFile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isPressed, setIsPressed] = useState(false);

    const onChangeName = e => {
        e.preventDefault();
        setName(e.target.value);
    }

    const onImageChange = e => {
        if(e.target.files && e.target.files[0]){
            setImg(URL.createObjectURL(e.target.files[0]));
            setSelectedFile(e.target.files[0]);
        }
    };

    const handleSubmit = async e => {
        e.preventDefault();
        if(name === "" || selectedFile === null) {
            return;
        }
        const formData = new FormData();
        formData.append('name', name);
        formData.append('image', selectedFile);
        setLoading(true);
        setIsPressed(true);
        await dispatch(addNewBrand(formData));
        setLoading(false);
        setIsPressed(false);
    }

    useEffect( _ => {
        if(!loading){
            setImg(avatar)
            setName("");
            setSelectedFile(null);
            setLoading(true);
            if(res.status === 201){
                notify("Successfully added", "success");
            } else {
                notify("Error", "error");
            }
        }
    }, [loading, res.status])

    return [img, isPressed, name, onChangeName, loading, onImageChange, handleSubmit];
}

export default AddCategoryHook;