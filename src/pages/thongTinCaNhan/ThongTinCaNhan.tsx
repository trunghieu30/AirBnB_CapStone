import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { RootState } from '../../stores/configStore'
import { getDatPhongTheoMaNguoiDung } from '../../stores/datPhong/getDatPhongTheoMaNguoiDungReducer'
import { getUsersID } from '../../stores/nguoiDung/getUsersIDReducer'
import { getPhongThueAll } from '../../stores/phongThue/getPhongThueAllReducer'
import { getViTriAll } from '../../stores/viTri/getViTriAllReuducer'
import { AiOutlineSafety } from "react-icons/ai";
import { TiTick } from "react-icons/ti";
import moment from 'moment'
import { deleteDatPhong, deleteDatPhongActions } from '../../stores/datPhong/deleteDatPhongReducer'
import PopupCapNhatAnh from './PopupCapNhatAnh'
import PopupCapNhatHoSo from './PopupCapNhatHoSo'
import PopupCapNhatDatPhongUser from './PopupCapNhatDatPhongUser'
import { getDatPhongID } from '../../stores/datPhong/getDatPhongIDReducer'

const ThongTinCaNhan: React.FC = () => {
   const param = useParams()
   const dispatch = useDispatch<any>()
   const { contentGetViTriAll } = useSelector((state: RootState) => state.getViTriAllReducer)
   const { contentGetPhongThueAll } = useSelector((state: RootState) => state.getPhongThueAllReducer)
   const { contentGetUsersID } = useSelector((state: RootState) => state.getUsersIDReducer)
   const { contentGetDatPhongTheoMaNguoiDung } = useSelector((state: RootState) => state.getDatPhongTheoMaNguoiDungReducer)
   const { messageDeleteDatPhong, errMessageDeleteDatPhong } = useSelector((state: RootState) => state.deleteDatPhongReducer)
   const { contentPostUserUpLoadAvatar } = useSelector((state: RootState) => state.postUsersUploadAvatarReducer)
   const { contentPutUser } = useSelector((state: RootState) => state.putUserIDReducer)
   const { contentPutDatPhong } = useSelector((state: RootState) => state.putDatPhongIDReducer)
   const [displayCapNhatAnh, setDisplayCapNhatAnh] = useState('hidden')
   const [displayCapNhatHoSo, setDisplayCapNhatHoSo] = useState('hidden')
   const [displayCapNhatDatPhong, setDisplayCapNhatDatPhong] = useState('hidden')

   useEffect(() => {
      window.scrollTo(0, 0)
      dispatch(getViTriAll())
      dispatch(getPhongThueAll())
   }, [])
   useEffect(() => {
      dispatch(getUsersID(param.id))
   }, [contentPostUserUpLoadAvatar, contentPutUser])
   useEffect(() => {
      dispatch(getDatPhongTheoMaNguoiDung(param.id))
   }, [messageDeleteDatPhong, contentPutDatPhong])

   return (
      <div className='ThongTinCaNhan pt-20 lg:pt-[110px] pb-5'>
         <div className='container'>
            <div className='grid grid-cols-4 gap-5'>
               <div className='col-span-4 lg:col-span-1'>
                  <div className='text-center border border-b-0 pt-5 border-gray-500 rounded-t-lg'>
                     <img src={contentGetUsersID?.avatar || 'https://static2.yan.vn/YanNews/2167221/202102/facebook-cap-nhat-avatar-doi-voi-tai-khoan-khong-su-dung-anh-dai-dien-e4abd14d.jpg'} alt="" className='w-32 h-32 bg-gray-300 m-auto rounded-full' />
                     <button onClick={() => setDisplayCapNhatAnh('')} className='underline font-bold hover:text-amber-800'>C???p nh???t ???nh</button>
                  </div>
                  <div className='border border-t-0 border-b-0 border-gray-500 px-5'>
                     <div className='border-b py-5'>
                        <AiOutlineSafety className='text-xl' />
                        <p className='m-0 font-bold'>X??c minh danh t??nh</p>
                        <p>X??c th???c danh t??nh c???a b???n v???i huy hi???u x??c minh danh t??nh</p>
                        <button className='border border-amber-800 rounded-lg px-5 py-1 hover:bg-amber-800 hover:text-white'>Nh???n huy hi???u</button>
                     </div>
                  </div>
                  <div className='px-5 py-3 border border-t-0 rounded-b-lg border-gray-500'>
                     <p className='m-0 text-base font-bold'>{contentGetUsersID?.name} ???? x??c nh???n</p>
                     <TiTick className='inline-block text-xl' /> <span>?????a ch??? email</span>
                  </div>
               </div>
               <div className='col-span-4 lg:col-span-3'>
                  <p className='m-0 text-center sm:text-left text-2xl font-bold text-amber-800'>Xin ch??o, t??i l?? {contentGetUsersID?.name}</p>
                  <div className='grid sm:grid-cols-3 pt-2 text-center sm:text-left text-base font-semibold'>
                     <p className='m-0'>Ng?????i d??ng: <span className='text-blue-500'>{contentGetUsersID?.role === 'ADMIN' ? "Qu???n tr??? vi??n" : 'Kh??ch h??ng'}</span></p>
                     <p className='m-0'>Email: {contentGetUsersID?.email}</p>
                     <p className='m-0'>??i???n tho???i: {contentGetUsersID?.phone}</p>
                     <p className='m-0'>Ng??y sinh: {contentGetUsersID?.birthday}</p>
                     <p className='m-0'>Gi???i t??nh: {contentGetUsersID?.gender ? 'Nam' : 'N???'}</p>
                  </div>
                  <div className='text-center sm:text-left pb-5'>
                     <button onClick={() => setDisplayCapNhatHoSo('')} className='text-amber-800 underline font-bold hover:text-amber-500'>Ch???nh s???a h??? s??</button>
                  </div>
                  {contentGetDatPhongTheoMaNguoiDung ? contentGetDatPhongTheoMaNguoiDung.length > 0 ? <p className='m-0 text-xl font-bold'>Ph??ng b???n ???? thu??</p> : <p className='m-0 text-xl font-bold'>B???n ch??a thu?? ph??ng n??o!</p> : ''}
                  {contentGetDatPhongTheoMaNguoiDung?.map((datPhong, i) => (
                     <div key={i} className='border-b py-3'>
                        {(() => {
                           const phongThue = contentGetPhongThueAll?.find(phongThue => phongThue.id === datPhong.maPhong)
                           return (
                              <div className='sm:flex'>
                                 <div className='sm:w-1/3'>
                                    <img src={phongThue?.hinhAnh} alt="" />
                                 </div>
                                 <div className='flex-1 flex flex-col justify-between sm:pl-3'>
                                    <div>
                                       <p className='m-0 sm:leading-none text-gray-500'>To??n b??? c??n h??? d???ch v??? t???i {(() => {
                                          const viTri = contentGetViTriAll?.find(viTri => viTri.id === phongThue?.maViTri)
                                          return <span><span>{viTri?.tenViTri}</span> - <span>{viTri?.tinhThanh}</span> - <span>{viTri?.quocGia}</span></span>
                                       })()}</p>
                                       <p className='text-xl font-bold m-0 text-amber-800'>{phongThue?.tenPhong}</p>
                                       <p className='m-0 text-green-800'><span>{phongThue?.khach} Kh??ch</span> - <span>{phongThue?.phongNgu} Ph??ng ng???</span> - <span>{phongThue?.giuong} Gi?????ng</span> - <span>{phongThue?.phongTam} Ph??ng t???m</span> - <span>{phongThue?.giaTien}$/ng??y</span></p>
                                       <p className='m-0 text-blue-800'>
                                          <span>{phongThue?.wifi ? 'Wifi.' : ''}</span><span> </span>
                                          <span>{phongThue?.dieuHoa ? '??i???u ho??.' : ''}</span><span> </span>
                                          <span>{phongThue?.tivi ? 'Tivi.' : ''}</span><span> </span>
                                          <span>{phongThue?.mayGiat ? 'M??y gi???t.' : ''}</span><span> </span>
                                          <span>{phongThue?.banLa ? 'B??n l??.' : ''}</span><span> </span>
                                          <span>{phongThue?.bep ? 'B???p.' : ''}</span><span> </span>
                                          <span>{phongThue?.doXe ? 'Ch??? ????? xe.' : ''}</span><span> </span>
                                          <span>{phongThue?.hoBoi ? 'H??? b??i.' : ''}</span><span> </span>
                                          <span>{phongThue?.banUi ? 'B??n ???i.' : ''}</span><span> </span>
                                       </p>
                                       <p className='m-0 font-semibold'><span>Ng??y ?????n: {moment(datPhong.ngayDen).format('DD/MM/YYYY')}</span> - <span>Ng??y ??i: {moment(datPhong.ngayDi).format('DD/MM/YYYY')}</span> - <span>S??? kh??ch ?????t</span> <span>{datPhong.soLuongKhach}</span></p>
                                    </div>
                                    <div>
                                       <p className='m-0 text-right text-base text-amber-800'>
                                          <span className='font-bold'>T???ng thanh to??n: {phongThue?.giaTien ? phongThue?.giaTien * ((() => {
                                             let ngayDen = (new Date(datPhong.ngayDen)).getTime()
                                             let ngayDi = (new Date(datPhong.ngayDi)).getTime()
                                             return ((ngayDi - ngayDen) / (24 * 3600 * 1000) + 1)
                                          })()) : ''}$</span>
                                          <button onClick={() => {
                                             dispatch(getDatPhongID(datPhong.id.toString()))
                                             setDisplayCapNhatDatPhong('')
                                          }} className='bg-green-800 p-1 rounded-md shadow text-white hover:bg-green-500 ml-5'>s???a</button>
                                          <button onClick={() => dispatch(deleteDatPhong(datPhong.id.toString()))} className='bg-red-800 p-1 rounded-md shadow text-white hover:bg-red-500 ml-3'>Hu???</button>
                                       </p>
                                    </div>
                                 </div>
                              </div>
                           )
                        })()}
                     </div>
                  ))}
               </div>
            </div>

            {messageDeleteDatPhong || errMessageDeleteDatPhong ?
               <div className='fixed top-0 bottom-0 left-0 right-0 bg-black/40'>
                  <div className='w-80 h-40 bg-white mx-auto mt-40 shadow flex flex-col justify-center items-center'>
                     <p className='text-xl text-center text-green-500'>{messageDeleteDatPhong || errMessageDeleteDatPhong}</p>
                     <button onClick={() => dispatch(deleteDatPhongActions.removeMessageDeleteDatPhong(''))} className=' py-3 px-7 rounded-lg bg-amber-800 text-white hover:bg-amber-500'>OK</button>
                  </div>
               </div> : ''
            }

            <div className={`${displayCapNhatAnh} fixed top-0 bottom-0 left-0 right-0 bg-black/50`}>
               <PopupCapNhatAnh setDisplayCapNhatAnh={setDisplayCapNhatAnh} />
            </div>

            <div className={`${displayCapNhatHoSo} fixed top-0 bottom-0 left-0 right-0 bg-black/50`}>
               <PopupCapNhatHoSo setDisplayCapNhatHoSo={setDisplayCapNhatHoSo} contentGetUsersID={contentGetUsersID} />
            </div>
            
            <div className={`${displayCapNhatDatPhong} fixed top-0 bottom-0 left-0 right-0 bg-black/50`}>
               <PopupCapNhatDatPhongUser setDisplayCapNhatDatPhong={setDisplayCapNhatDatPhong} contentGetViTriAll={contentGetViTriAll} contentGetPhongThueAll={contentGetPhongThueAll} />
            </div>
         </div>
      </div>
   )
}

export default ThongTinCaNhan