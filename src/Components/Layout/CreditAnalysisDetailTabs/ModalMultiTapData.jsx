import ModalGuarantorMultiTab0101 from '../ModalGuarantorMultiTab/ModalGuarantorMultiTab0101';
import ModalGuarantorMultiTab0102 from '../ModalGuarantorMultiTab/ModalGuarantorMultiTab0102';
import ModalGuarantorMultiTab0103 from '../ModalGuarantorMultiTab/ModalGuarantorMultiTab0103';
import ModalGuarantorMultiTab0104 from '../ModalGuarantorMultiTab/ModalGuarantorMultiTab0104';
import ModalGuarantorMultiTab0105 from '../ModalGuarantorMultiTab/ModalGuarantorMultiTab0105';
import ModalGuarantorMultiTab0201 from '../ModalGuarantorMultiTab/ModalGuarantorMultiTab0201';
import ModalGuarantorMultiTab0301 from '../ModalGuarantorMultiTab/ModalGuarantorMultiTab0301';
import ModalGuarantorMultiTab0305 from '../ModalGuarantorMultiTab/ModalGuarantorMultiTab0305';
import ModalGuarantorMultiTab0401 from '../ModalGuarantorMultiTab/ModalGuarantorMultiTab0401';

const ModalMultiTapData = [
	{
		name: 'Cliente',
		tabs: [
			{
				name: 'Datos',
				content: <ModalGuarantorMultiTab0101 />
			},
			{
				name: 'Tel. y Direc',
				content: <ModalGuarantorMultiTab0102 />
			},
			{
				name: 'Artículos',
				content: <ModalGuarantorMultiTab0103 />
			},
			{
				name: 'Datos Adicionales',
				content: <ModalGuarantorMultiTab0104 />
			},
			{
				name: 'Comentarios',
				content: <ModalGuarantorMultiTab0105 />
			}
		]
	},
	{
		name: 'Cuenta',
		tabs: [
			{
				name: 'Cuenta',
				content: <ModalGuarantorMultiTab0201 />
			}
		]
	},
	{
		name: 'CrediServer',
		tabs: [
			{
				name: 'Personal',
				content: <ModalGuarantorMultiTab0301 />
			},
			{
				name: 'Localización',
				content: <>CrediServer Empty</>
			},
			{
				name: 'Vehículos',
				content: <>CrediServer Empty</>
			},
			{
				name: 'Propiedades',
				content: <>CrediServer Empty</>
			},
			{
				name: 'H. Laboral',
				content: <ModalGuarantorMultiTab0305 />
			},
			{
				name: 'Juicios',
				content: <>CrediServer Empty</>
			},
			{
				name: 'R. Crédito',
				content: <>CrediServer Empty</>
			},
			{
				name: 'Hijos y hermanos',
				content: <>CrediServer Empty</>
			},
			{
				name: 'H. Civil',
				content: <>CrediServer Empty</>
			}
		]
	},
	{
		name: 'TransUnion',
		tabs: [
			{
				name: 'Personal',
				content: <ModalGuarantorMultiTab0401 />
			},
			{
				name: 'Contacto',
				content: <>Empty</>
			},
			{
				name: 'Datos Laborales',
				content: <>Empty</>
			},
			{
				name: 'D Crediticio',
				content: <>Empty</>
			},
			{
				name: 'Tarjetas',
				content: <>Empty</>
			},
			{
				name: 'R. Negativos',
				content: <>Empty</>
			},
			{
				name: 'Muebles',
				content: <>Empty</>
			},
			{
				name: 'Inmuebles',
				content: <>Empty</>
			},
			{
				name: 'G. Muebles',
				content: <>Empty</>
			},
			{
				name: 'G. Inmuebles',
				content: <>Empty</>
			}
		]
	}
];

export default ModalMultiTapData;