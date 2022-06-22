const db = require('./db.service');

class ClienteService {

  constructor() {
    this.generate();
  }

  generate() {

  }

  async create(data) {
    console.log(data);
    const result = await db.query(
      `INSERT INTO bdcontactos.clientes (num_cliente, nombre_cliente, rfc_cliente, calle, cod_postal, ciudad, estado, pais) VALUES
      ( ${data.num_cliente},
        '${data.nombre_cliente}',
         '${data.rfc_cliente}',
          '${data.calle}',
          ${data.cod_postal},
          '${data.ciudad}',
          '${data.estado}',
          '${data.pais}')`
    );
    return result;
  }

  async find() {
    const result = await db.query(`SELECT *
        FROM clientes`);
    return result;
  }

  async findOne(id) {
    const result = await db.query(
      `SELECT *
        FROM clientes where id_cliente=${id}`);
    return result;

  }

  async update(id, changes) {
    const result = await db.query(
      `UPDATE
    bdcontactos.clientes
     SET
    nombre_cliente='${changes.nombre_cliente}',
    rfc_cliente='${changes.rfc_cliente}',
    calle ='${changes.calle}',
    cod_postal=${changes.cod_postal},
    ciudad='${changes.ciudad}',
    estado='${changes.estado}',
    pais='${changes.pais}'
     WHERE id_cliente = ${id};`);
    return result;

  }

  async delete(id) {
    const result = await db.query(
      `delete
        FROM clientes where id_cliente=${id}`);
    return result;
  }

  async findContacts(id) {
    const result = await db.query(
      `SELECT *
        FROM contactos where id_cliente=${id}`);
    return result;

  }

  async findContact(idCl, idCo) {
    const result = await db.query(
      `SELECT *
        FROM contactos where idcontactos=${idCo} AND id_cliente=${idCl}`);
    return result;
  }

  async createContact(id, data) {
    console.log(data);
    const result = await db.query(
      `INSERT INTO bdcontactos.contactos (nombre_contacto, apellido_paterno, apellido_materno, correo, num_telefono, id_cliente) VALUES
      ( '${data.nombre_contacto}',
         '${data.apellido_paterno}',
          '${data.apellido_materno}',
          ' ${data.correo}',
          ${data.num_telefono},
          ${id})`
    );
    return result;
  }

  async updateContact(idCl, changes, idCo) {
    const result = await db.query(
      `UPDATE
    bdcontactos.contactos
     SET
    nombre_contacto='${changes.nombre_contacto}',
    apellido_paterno='${changes.apellido_paterno}',
    apellido_materno='${changes.apellido_materno}',
    correo='${changes.correo}',
    num_telefono=${changes.num_telefono}
    WHERE idcontactos = ${idCo} AND id_cliente=${idCl};`);
    return result;
  }

  async deleteContact(idCl, idCo) {
    const result = await db.query(
      `delete
        FROM contactos where idcontactos=${idCo} AND id_cliente=${idCl};`);
    return result;
  }

}

module.exports = ClienteService;

