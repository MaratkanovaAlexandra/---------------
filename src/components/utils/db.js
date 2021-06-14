import pkg from 'mssql';

    const sqlConfig = {
      user: "MainServer",
      password: "mainserver123456",
      database: "university-task",
      server: 'localhost',
      options: {
        port: 1433,
        enableArithAbort: true,
      }
    }

export async function postDonation(body) {
    await pkg.connect(sqlConfig);
    const FOND = await pkg.query(`SELECT * FROM Fonds WHERE fondName='${body.fondName}'`);
    let PERSON = await pkg.query(`SELECT * FROM People WHERE (name='${body.name}') AND (email = '${body.email}')`);

    if (PERSON.recordset.length === 0) {
        await pkg.query(`INSERT INTO People VALUES ('${body.name}', '${body.email}')`);
        PERSON = await pkg.query(`SELECT * FROM People WHERE (name='${body.name}') AND (email = '${body.email}')`);
    }
    const personId = PERSON.recordset[0].id;
    const fondId = FOND.recordset[0].id;
    const date = new Date();
    const dateStr = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;

    if (PARAMS.path[0] == "Donations") {
        pkg.query(`INSERT INTO Donations VALUES (${personId}, ${fondId}, ${body.amount}, '${dateStr}')`);
        return;
    }
}
