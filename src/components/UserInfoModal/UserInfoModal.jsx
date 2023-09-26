import { Avatar, Box, Dialog, DialogTitle } from '@mui/material';
import { Notify } from 'notiflix';
import { Field, Formik } from 'formik';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/authSelectors';
import { StyledButton, StyledTypography } from '../SignUp/SignUp.styled';
import { SkeletonAuth } from '../Skeletons/SkeletonAuth';
import { StyledCloseIcon, StyledField, StyledForm, StyledLabel } from './UserInfoModal.styled';
import EditIcon from '@mui/icons-material/Edit';
import addPhoto from '../../assets/images/userInfoModal/addPhoto.svg'
import { updateUser } from '../../redux/auth/user/userOperations';

export const UserInfoModal = ({ isOpen, handleClose }) => {
  const [isLoading, setIsLoading] = useState(false);
  const { name, avatarURL } = useSelector(selectUser);
  const [avatar, setAvatar] = useState('');
  const [fileAvatar, setFileAvatar] = useState('');
  const dispatch = useDispatch();

  useEffect(()=>{
    if(avatarURL) {
      setAvatar(avatarURL)
    }
  }, [avatarURL])

  const handleChangeAvatar = ({target}) => {
    const file = target.files[0];
    const maxSizeFile = 5 * 1024 * 1024;
    if(file.size > maxSizeFile) {
      Notify.failure('Файл повинен бути менше 5Mb', {
        position: 'center-top',
        distance: '10px',
      });
      setFileAvatar('');
      return
    }
    setFileAvatar(file);
    const objectURL = URL.createObjectURL(file);
    setAvatar(objectURL);
  }

  const handleSubmit = async (values, { resetForm }) => {
    const formData = new FormData();

    formData.append('avatar', fileAvatar);
    formData.append('name', values);

    try {
      setIsLoading(true);
      await dispatch(updateUser(formData));
      setIsLoading(false);

      resetForm()
      
    } catch (error) {
      console.log('Помилка сабміту при оновлені профилю', error.message);
    }
    esetForm()
    
  }

  const initialValues = {
    name,
  };

  return (
    <Dialog open={isOpen} onClose={handleClose} aria-labelledby="profile" >
      {isLoading ? (
        <SkeletonAuth totalRow={4} />
      ) : (
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          // validationSchema={SignInSchema}
        >

          {({ errors, touched }) => (
            <StyledForm >
              {isLoading ? (
                <SkeletonAuth totalRow={3} />
              ) : (
                <>
                <StyledCloseIcon onClick={handleClose} sx={{cursor:"pointer"}}/>
                <Box sx={{position:"relative"}}>
                  <Avatar
                  id="profile"
                    alt="avatar"
                    src={avatar}
                    sx={{
                      width: 80,
                      height: 80,
                      marginLeft: 'auto',
                      marginRight: 'auto',
                      marginBottom: "39px",
                    }}
                  />
                  <Box sx={{position:"absolute", width:"28", height:"28", top: "80%", left: "45%"}}>
                    <Field name="file" type="file" id="loadFile" hidden onChange={handleChangeAvatar}/>
                    <StyledLabel for="loadFile" role="button" ><img src={addPhoto} alt="add avatar" width="28" height="28"/></StyledLabel>
                  </Box>
                  </Box>
                  <Box sx={{position:"relative"}}>
                  <StyledField placeholder={initialValues.name} name="name" />
                  <EditIcon sx={{width: "16px", height: "16px", color: "#F3F3F3", position:"absolute", top: "19px", right:"24px"}}/>
                  </Box>
                  <StyledButton type="submit" sx={{marginTop: "18px"}}>
                      <StyledTypography>Save changes</StyledTypography>
                    </StyledButton>
                </>
              )}
            </StyledForm>
          )}
        </Formik>
      )}
    </Dialog>
  );
};
