

type EquipmentItemProps = {
  name: string;
  icon: React.ReactNode;
};

const EquipmentItem = ({ name, icon }: EquipmentItemProps) => {
  return (
    <li className="flex items-center gap-2">
      {icon} <span>{name}</span>
    </li>
  );
};

export default EquipmentItem;
