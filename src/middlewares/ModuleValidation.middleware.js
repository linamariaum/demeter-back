import jwt from "jsonwebtoken"
import { TOKEN_SECRET } from "../config.js"
import { role } from "../models/role.model.js"
<<<<<<< Updated upstream
import { module } from "../models/module.model.js"
import { request, response } from "express"
import { user } from "../models/user.model.js"
import { modulePermission } from "../models/modulePermission.model.js"

export default class {

  #errorHandler
  #res
  #req
=======
import { permission } from "../models/permission.model.js"
import { module } from "../models/module.model.js"
import { request, response } from "express"
import { user } from "../models/user.model.js"

export default class {


  #errorHandler
>>>>>>> Stashed changes
  constructor(errorHandler = ({
    req = request,
    res = response,
    next = () => null,
    error = new Error("")
  }) => null) {

    this.MODULES = {
      DASHBOARD: "dashboard",
      SETTINGS: "settings",
      USER: "user",
<<<<<<< Updated upstream
      CATEGORY_SUPPLIES: "categorySupplies",
      SUPPLIES: "supplies",
      SUPPLIER: "supplier",
=======
      CATEGORY_SUPPLIES: "categorySupplier",
      SUPPLIES: "supplies",
      SUPPLIER: "suppliar",
>>>>>>> Stashed changes
      CATEGORY_PRODUCT: "categoryProduct",
      PRODUCT: "product",
      WAITER: "waiter",
      SHOPPING: "shopping",
      SALES: "sales"
    }

    this.#errorHandler = errorHandler
    this.userModel = user
    this.moduleTypes = module
<<<<<<< Updated upstream
    this.modulePermission = modulePermission
=======
>>>>>>> Stashed changes
    this.roleModel = role
  }

  getCurrentUserAndRole = async () => {

<<<<<<< Updated upstream
    const token = this.#req.cookies.token
    const user = jwt.decode(token, TOKEN_SECRET)

    return await this.userModel.findOne({
      where: {
        ID_User: user?.id
=======
    // const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MDEyMTc5MTEsImV4cCI6MTcwMTIxODUxMX0.M1W5cmZ5-L0c3rkJyC-7Eq5X7PHQzu1q57i6650tY_Q"
    // const user = jwt.verify(token, TOKEN_SECRET)
    const id = 3

    return await this.userModel.findOne({
      where: {
        ID_User: id
>>>>>>> Stashed changes
      },

      include: [
        {
          model: this.roleModel,
          required: true
        }
      ]
    })
  }

  hasPermissions = (...moduleView) => {

    return async (req, res, next) => {
<<<<<<< Updated upstream
      try {
        this.#res = res
        this.#req = req
        const moduleNames = Array.from(await this.getAssociatedModulePermissionsByRole())
        const includes = moduleView.every(m => moduleNames.some(md => md.Module.Name_Module === m))

        if (!includes) {
          this.#errorHandler({
            req,
            res,
            next,
            error: new Error("No tienes permisos")
          })
          return
        }

        next()
      }
      catch (error) {
        this.#errorHandler({
          error,
          next,
          req,
          res
        })
      }
    }
  }

  getAssociatedModulePermissionsByRole = async () => {

    const user = await this.getCurrentUserAndRole()

    if (!user) throw new Error("El usuario no existe")
    const permissions = await this.modulePermission.findAll({
      where: {
        Role_ID: user.Role_ID
      },
      include: [{
        model: this.moduleTypes,
        required: true
      }]
    })
    return permissions
  }
}

/*
  INSERT INTO modules(Name_module)
VALUES
("dashboard"),
("product"),
("setting"),
("user"),
("categorySupplies"),
("waiter"),
("shopping"),
("sales");
("supplies");
("supplier");
("categoryProduct");


INSERT INTO typeusers(Name_Type)
VALUES
("Empleados"),
("Meseros");
  */
=======
      const moduleNames = Array.from(await this.getAssociatedModulePermissionsByRole(req, res, next))

      const includes = moduleNames.every(md => moduleView.includes(md.Name_Module))

      if (!includes) {
        this.#errorHandler({
          req,
          res,
          next,
          error: new Error("No tienes permisos")
        })
        return
      }

      next()
    }
  }

  getAssociatedModulePermissionsByRole = async (req, res, next) => {

    try {
      const user = await this.getCurrentUserAndRole()

      if (!user) return null
      const permissions = await permission.findAll({
        where: {
          Role_ID: user.Role_ID
        },

        include: [
          {
            model: this.moduleTypes,
            require: true
          }
        ]
      })

      return permissions
    }
    catch {
      this.#errorHandler({
        res,
        req,
        error: new Error("Error"),
        next
      })
    }
  }


}

/*

id INT AUTO_INCREMENT,
    modulName VARCHAR(100) NOT NULL,
    state TINYINT DEFAULT 1,
    dahsboard,
    setting,
    user,
    categorySupplies,
    supplies,
    supplier,
    categoryProduct,
    product,
    waiter,
    shopping,
    sales
    */
>>>>>>> Stashed changes
