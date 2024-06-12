'use Client';

import { useModal } from '@/context/ModalContext';
import { deleteColumnByID } from '../ToDoCardModal/api';
import ModalFooterButtons from '../ModalFooterButtons';

const DeleteColumnAlertModal = ({
  columnId,
  setIsColumnChange,
}: {
  columnId: number;
  setIsColumnChange: any;
}) => {
  const { closeModal } = useModal();

  const handleDeleteColumn = (columnId: number) => {
    deleteColumnByID(columnId, setIsColumnChange);
    closeModal();
    setIsColumnChange(true);
  };

  return (
    <div className='relative flex h-[202px] w-[492px] items-center justify-center p-[4px]'>
      <p className='text-[18px]'>칼럼의 모든 카드가 삭제됩니다</p>
      <div className='absolute bottom-0 right-0'>
        <ModalFooterButtons
          onAction={() => handleDeleteColumn(columnId)}
          actionName='삭제'
          isDisabled={true}
        />
      </div>
    </div>
  );
};

const modalButtonStyle =
  'text-center w-[120px] h-[48px] text-[16px] rounded-lg border border-[#d9d9d9] max-sm:w-[138px]';

export default DeleteColumnAlertModal;
