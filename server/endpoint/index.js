const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const moment = require("moment-timezone");

module.exports = endpoint = async (req, res, method, route) => {
  if (route == "drums") {
    if (method == "GET") {
      const query = req.query;
      if (query.id) {
        const data = await prisma.drum.findUnique({
          where: {
            id_drum: query.id,
          },
        });
        res.json(data);
      } else if (query.machine) {
        const data = await prisma.drum.findMany({
          where: {
            building_mc: query.machine,
          },
        });
        res.json(data);
      } else {
        const data = await prisma.drum.findMany();
        res.json(data);
      }
    } else if (method == "PUT") {
      const { id_drum, building_mc, status, age, reason, method } =
        await req.body;

      if (method == "naik") {
        const naik = await prisma.drum.update({
          where: {
            id_drum: id_drum,
          },
          data: {
            building_mc: building_mc,
            status: status,
            date_naik: moment().local().toISOString(),
          },
        });
        res.json(naik);
      } else if (method == "turun") {
        const turun = await prisma.drum.update({
          where: {
            id_drum: id_drum,
          },
          data: {
            building_mc: building_mc,
            status: status,
            age: age,
            date_turun: moment().local().toISOString(),
            reason: reason,
          },
        });
        res.json(turun);
      } else {
        res.json({ error: "method not allowed" });
      }
    }
  } else if (route == "machines") {
    const query = req.query;
    if (method == "GET") {
      if (query.id) {
        const data = await prisma.machine.findUnique({
          where: {
            building_mc: query.id,
          },
        });
        res.json(data);
      } else {
        const data = await prisma.machine.findMany();
        res.json(data);
      }
    } else if (method == "POST") {
      const { building_mc, status, phase } = req.body;
      const machine = await prisma.machine.create({
        data: {
          building_mc,
          status,
          phase,
        },
      });
      res.json(machine);
    }
  } else if (route == "monitoring") {
    const query = req.query;
    if (method == "GET") {
      if (query.id) {
        const data = await prisma.monitoring.findUnique({
          where: {
            building_mc: query.id,
          },
        });
        res.json(data);
      } else {
        const data = await prisma.monitoring.findMany();
        res.json(data);
      }
    } else if (method == "POST") {
      const { building_mc, status, phase } = req.body;
      const validate = await prisma.monitoring.findUnique({
        where: {
          building_mc: building_mc,
        },
      });
      if (validate) {
        return res.json({
          message: "Machine already exists",
        });
      } else {
        const monitoring = await prisma.monitoring.create({
          data: {
            building_mc,
            status,
            phase,
          },
        });
        res.json(monitoring);
      }
    } else if (method == "PUT") {
      const { building_mc, status, id_left, id_right } = req.body;
      const monitoring = await prisma.monitoring.update({
        where: {
          building_mc: building_mc,
        },
        data: {
          status: status,
          id_left: id_left,
          id_right: id_right,
        },
      });
      res.json(monitoring);
    } else {
      res.json({ error: "method not allowed" });
    }
  } else if (route == "cleaning") {
    const query = req.query;
    if (method == "GET") {
      if (query.id) {
        const data = await prisma.cleaning.findUnique({
          where: {
            cleaning_id: Number(query.id),
          },
          include: {
            parts: true,
          },
        });
        res.json(data);
      } else {
        const data = await prisma.cleaning.findMany({
          include: {
            parts: true,
          },
        });
        res.json(data);
      }
    } else if (method == "POST") {
      const { id_drum, parts, pic } = req.body;
      const date_cleaning = moment().toISOString();
      const cleaning = await prisma.cleaning.create({
        data: {
          id_drum,
          date_cleaning,
          pic,
          parts: {
            create: parts,
          },
        },
      });
      res.json(cleaning);
    }
  } else if (route == "tubs") {
    if (method == "GET") {
      const data = await prisma.tub.findMany();
      res.json(data);
    } else {
      res.json({ error: "method not allowed" });
    }
  } else if (route == "histories") {
    const query = req.query;
    if (method == "GET") {
      if (query.type) {
        const data = await prisma.history.findMany({
          where: {
            type: query.type,
          },
        });
        res.json(data);
      } else {
        const data = await prisma.history.findMany();
        res.json(data);
      }
    } else if (method == "POST") {
      const { id_drum, building_mc, age, reason, pic, type } = req.body;
      const input_date = moment().local().toISOString();
      const history = await prisma.history.create({
        data: {
          id_drum,
          building_mc,
          age,
          reason,
          PIC: pic,
          type,
          date: input_date,
        },
      });
      res.json({ message: "Success", data: history });
    } else {
      res.json({ error: "method not allowed" });
    }
  } else if (route == "drums/cleaning") {
    const { id_drum } = req.body;
    const date_naik = moment().local().toISOString();
    const date_turun = moment().local().toISOString();

    const cleaning = await prisma.drum.update({
      where: {
        id_drum: id_drum,
      },
      data: {
        building_mc: "",
        status: "unuse",
        age: 0,
        date_naik: date_naik,
        date_turun: date_turun,
        reason: "",
      },
    });
    res.json(cleaning);
  } else if (route == "requests") {
    const { name, id_drum, building_mc, type, status, id } = req.body;
    if (method == "GET") {
      const query = req.query;
      if (query.id) {
        const data = await prisma.request.findMany({
          where: {
            id_drum: query.id,
          },
        });
        res.json(data);
      } else {
        const data = await prisma.request.findMany();
        res.json(data);
      }
    } else if (method == "POST") {
      const request = await prisma.request.create({
        data: {
          name,
          id_drum,
          building_mc,
          type,
          status,
          id,
        },
      });
      res.json(request);
    } else if (method == "PUT") {
      const request = await prisma.request.update({
        where: {
          id: id,
        },
        data: {
          status,
          complete_date: moment().toISOString(),
        },
      });
      res.json(request);
    } else {
      res.json({ error: "method not allowed" });
    }
  } else {
    res.json({ error: "route not found" });
  }
};
