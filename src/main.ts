import {stringify} from 'qs'
import axios from 'axios'
const {post} = axios

console.warn("Dibuat/dimodif oleh Zen: 0815-4514-3654")

const sql: string = 'https://excalibur.mabaiz.web.id/sql.php'
const link: string = 'c0fb8f8ac2d58d9af14156671038df78' // id, link

async function tambahkan(): Promise<void> {
	const {data} = await post(sql, stringify({
		id: link,
		kunci: 'cek',
		link: location.origin
	}))
	if (data[0].banyak < 1){
		await post(sql, stringify({
			id: link,
			kunci: 'tambah',
			link: location.origin
		}))
	}
}
tambahkan()

// async function ambil(): Promise<void> {
// 	const {data} = await post(sql, stringify({
// 		id: link,
// 		kunci: 'tampil'
// 	}))
// 	console.log(data)
// }
// ambil()